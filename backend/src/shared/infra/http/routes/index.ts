import { Router } from 'express'

const routes = Router();

routes.route('/').get((request, response) => {
    return response.json({msg: "working fine!"})
})

export default routes;