
import { Schema, model } from "mongoose";


// const { Schema } = mongoose;

const statementSchema = new Schema({
    // statementId: {type: String}, 
    incidentType: {type: String, enum:['non-criminal', 'criminal']},
    CivilianStatus: {type: String, enum: ['suspect', 'complaint', 'witness']},
    statement: {type: String},
    caseStatus: {enum: ['open', 'close']},
    // civilianId: {type: String},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
});


export const StatementModel = model('Statement', statementSchema);
