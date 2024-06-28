
import { StatementModel } from "../models/statement_model.js";



// function to store data in the database
export const addStatement = async (req, res) => {

    try {

        console.log('request', req.body);
    const addData = await StatementModel.create(req.body);
     res.status(200).send(addData);
        
    } catch (error) {
        console.log(error)
        
    }

    
}

// function to show all data in the database
export const getStatement = async (req, res) => {

    try {

        console.log('request', req.body);
    const showData = await StatementModel.find()
    {
        res.status(200).send(showData)
    }
     
        
    } catch (error) {
        console.log(error)
        
    }

    
}

// function to show just one data in the database
export const getsingleData = async (req, res) => {

    try {

        console.log('request', req.body);
    const showoneData = await StatementModel.findById(req.params.id);
    {
        res.status(200).send(showoneData)
    }
     
        
    } catch (error) {
        console.log(error)
        
    }

    
}


// function to patch just one data in the database
export const patchData = async (req, res) => {

    try {
        const status = req.body.caseStatus;
        console.log('request', status);
    const patchstatement = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
    {
        res.status(200).send(patchstatement)
    }
     
        
    } catch (error) {
        console.log(error)
        
    }

    
}