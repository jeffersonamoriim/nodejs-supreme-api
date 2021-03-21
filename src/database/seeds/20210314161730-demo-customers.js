module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
            "customers",
            [
                {
                    name: "Kris Williams",
                    email: "kriswilliams@sportan.com",
                    status: "ARCHIVED",
                    created_at: "2021-03-26T01:28:56 +03:00",
                    updated_at: "2021-03-20T02:31:26 +03:00",
                },
                {
                    name: "Patti Cummings",
                    email: "patticummings@sportan.com",
                    status: "ACTIVE",
                    created_at: "2021-03-26T11:18:35 +03:00",
                    updated_at: "2021-04-08T08:21:03 +03:00",
                },
                {
                    name: "Minnie Gilmore",
                    email: "minniegilmore@sportan.com",
                    status: "ACTIVE",
                    created_at: "2021-03-19T04:21:26 +03:00",
                    updated_at: "2021-03-26T09:27:30 +03:00",
                },
                {
                    name: "Olga Gallagher",
                    email: "olgagallagher@sportan.com",
                    status: "ACTIVE",
                    created_at: "2021-03-23T09:21:40 +03:00",
                    updated_at: "2021-04-01T11:28:18 +03:00",
                },
                {
                    name: "Kelli Chang",
                    email: "kellichang@sportan.com",
                    status: "ARCHIVED",
                    created_at: "2021-03-17T02:26:26 +03:00",
                    updated_at: "2021-03-15T12:40:53 +03:00",
                },
                {
                    name: "Maureen Cooper",
                    email: "maureencooper@sportan.com",
                    status: "ACTIVE",
                    created_at: "2021-03-26T12:05:40 +03:00",
                    updated_at: "2021-04-10T07:58:41 +03:00",
                },
                {
                    name: "Tamera Sherman",
                    email: "tamerasherman@sportan.com",
                    status: "ARCHIVED",
                    created_at: "2021-03-15T08:06:03 +03:00",
                    updated_at: "2021-04-06T07:50:36 +03:00",
                },
                {
                    name: "Carissa Mays",
                    email: "carissamays@sportan.com",
                    status: "ACTIVE",
                    created_at: "2021-04-12T06:45:28 +03:00",
                    updated_at: "2021-04-03T09:14:36 +03:00",
                },
                {
                    name: "Mamie Galloway",
                    email: "mamiegalloway@sportan.com",
                    status: "ARCHIVED",
                    created_at: "2021-03-15T06:08:07 +03:00",
                    updated_at: "2021-03-19T12:13:58 +03:00",
                },
                {
                    name: "Katrina Peck",
                    email: "katrinapeck@sportan.com",
                    status: "ARCHIVED",
                    created_at: "2021-03-25T01:33:02 +03:00",
                    updated_at: "2021-03-28T04:04:50 +03:00",
                },
            ],
            {}
        );
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete("customers", null, {});
    },
};
