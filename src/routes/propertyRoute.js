import express from "express";
import propertyController from "../controller/property"
const router = express.Router();

router.route('/properties')
    .get(propertyController.findAll);

router.route('/properties')
    .post(propertyController.create);

router.route('/properties/find/:type')
    .get(propertyController.findType);

router.route('/properties/:id')
    .patch(propertyController.update);

router.route('/properties/:id/sold')
    .patch(propertyController.markAsSold);

router.route('/properties/:id')
    .get(propertyController.findOne);

router.route('/properties/:id')
    .delete(propertyController.deleteProp);

export default router;