import { parseISO } from "date-fns";
import { Op } from "sequelize";
import File from "../models/File";

class FilesController {
    async index(req, res) {
        const {
            name,
            createdBefore,
            createdAfter,
            updatedBefore,
            updatedAfter,
            sort,
        } = req.query;

        const page = req.query.page || 1;
        const limit = req.query.limit || 25;

        let where = {};
        let order = [];

        if (name) {
            where = {
                ...where,
                name: {
                    [Op.iLike]: name,
                },
            };
        }

        if (createdBefore) {
            where = {
                ...where,
                createdAt: {
                    [Op.gte]: parseISO(createdBefore),
                },
            };
        }

        if (createdAfter) {
            where = {
                ...where,
                createdAt: {
                    [Op.lte]: parseISO(createdAfter),
                },
            };
        }

        if (updatedBefore) {
            where = {
                ...where,
                updatedAt: {
                    [Op.gte]: parseISO(updatedBefore),
                },
            };
        }

        if (updatedAfter) {
            where = {
                ...where,
                updatedAt: {
                    [Op.lte]: parseISO(updatedAfter),
                },
            };
        }

        if (sort) {
            order = sort.split(",").map((item) => item.split(":"));
        }

        const data = await File.scope("default").findAll({
            where,
            order,
            limit,
            offset: limit * page - limit,
        });

        return res.json(data);
    }

    async show(req, res) {
        const file = await File.scope("default").findByPk(req.params.id);

        if (!file) {
            return res.status(404).json();
        }

        return res.json(file);
    }

    async create(req, res) {
        if (!req.file) {
            return res.status(400).json({ error: "File not provided" });
        }

        const { originalname: name, filename: path } = req.file;

        const file = await File.create({ name, path });

        return res.json(file);
    }

    async update(req, res) {
        if (!req.file) {
            return res.status(400).json({ error: "File not provided" });
        }

        const file = await File.findByPk(req.params.id);

        if (!file) {
            return res.status(404).json();
        }

        const { originalname: name, filename: path } = req.file;

        await file.update({ name, path });

        return res.json(File);
    }

    async destroy(req, res) {
        const file = await File.findByPk(req.params.id);

        if (!file) {
            return res.status(404).json();
        }

        await file.destroy();

        return res.json();
    }
}

export default new FilesController();
