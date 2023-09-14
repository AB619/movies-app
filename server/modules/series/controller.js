import { Series } from "../../models/index.js";

const listSeries = async(req, res) => {
  try{
    return res.json({
      data: await Series.find({type: 'series'})
    });
  }
  catch(error){
    return res.status(503).send(`Server is having issues! ${error}`);
  }
};

export {listSeries};