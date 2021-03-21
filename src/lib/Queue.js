import Bee from "bee-queue";
import "dotenv/config";
import WellcomeEmailJob from "../app/jobs/WellcomeEmailJob";
import redisConfig from "../config/redis";

const jobs = [WellcomeEmailJob];

class Queue {
    constructor() {
        this.queues = {};
        this.init();
    }

    init() {
        jobs.forEach(({ key, handle }) => {
            this.queues[key] = {
                bee: new Bee(key, {
                    redis: redisConfig,
                }),
                handle,
            };
        });
    }

    add(queue, job) {
        return this.queues[queue].bee.createJob(job).save();
    }

    processQueue() {
        jobs.forEach((job) => {
            const { bee, handle } = this.queues[job.key];
            bee.on("failed", this.handleFailure).process(handle);
        });
    }

    handleFailure(job, err) {
        if (process.env.NODE_ENV === "development")
            console.error(`Queue ${job.queue.name}: failed`, err);
    }
}

export default new Queue();
