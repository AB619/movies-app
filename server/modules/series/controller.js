import { Series } from "../../models/index.js";
//import joi from 'joi';

const listSeries = async(req, res) => {
  const { page, limit, sort, search } = req.query;
  try{
    const list = await Series.find(search ? {title: new RegExp(
      '.*' + search + '.*' , 'i'
    )} : {},null,{
      limit,
      skip: page * limit,
      sort
    });
    const count = await Series.count(search ? {title: new RegExp(
      '.*' + search + '.*' , 'i'
    )} : {});

    return res.json({
      data: {
        list,
        count
      }
    });
  }
  catch(error){
    return res.status(503).send(`Server is having issues! ${error}`);
  }
};

const addSeries = async(req, res) => {
  const { title, poster, rating, type } = req.body;
  try{
    await Series.create({
      id: `${Math.random()*1000}_${title}`, title, poster, rating, type
    });

    return res.json({
      message: "Series Added Successfully!",
    });
  }
  catch(error){
    return res.status(500).json({
      message: "Series Addition Failed!",
      error: error?.message,
    });
  }
}

export {listSeries, addSeries};