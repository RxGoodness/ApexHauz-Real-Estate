import express from "express";
import reportsController from "../controller/report"
const router = express.Router();

router.route('/reports')
    .get(reportsController.findAll);

router.route('/reports')
    .post(reportsController.create);

export default router;