const { Router } = require('express');
const router = Router();
const response = require('../../../network/response');
const Controller = require('./index');
router.get('/', async (req, res) => {
    const lista = await Controller.list()
    return response.success(req, res, lista, 200);
});
router.get('/:id', async (req, res) => {
    const resp = await Controller.get(req.params.id);
    return response.success(req, res, resp, 200);
});
router.post('/', async (req, res) => {
    const resp = await Controller.upsert(req.body);
    return response.success(req, res, resp, 201);
});
/**
 * DELETE /user/:id
 * @description Deletes a user given its ID
 * @summary Deletes a user
 * @param {number} id.params - ID of the user we want to delete - integer
 * @return {object} 200 - Whether or not the user could be deleted - application/json
 * @example response - 200 - success response example
 * {
 *      "error": false,
 *      "status": 200,
 *      "body": {...}
 * }
 * @return {object} 500 - Internal Server Error
 */
router.delete('/:id', async (req, res) => {
    const resp = await Controller.remove(req.params.id);
    return response.success(req, res, resp, 200);
});
module.exports = router;