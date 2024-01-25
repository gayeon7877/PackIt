import SwaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        info: {
            title: 'PACKIT API',
            version: '1.0.0',
            description: 'PackIt (v1.0)'
        },
        servers: [
            {
                url: 'http://localhost:3000/',
            },
        ],
    },
    apis: ['./src/routes/*.js', './src/swagger/*.yaml']

};

export const specs = SwaggerJsdoc(options);