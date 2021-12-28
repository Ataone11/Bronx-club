import { Response, RequestHandler } from "express";
import Usuario from "./Usuario";
import plans from "./Plans";

export const createUsuario: RequestHandler = async (req, res) => {
    const newVideo = new Usuario(req.body); 
    console.log(newVideo)
    const savedVideo = await newVideo.save();
    res.json(savedVideo);
  };

  export const getUsuarios: RequestHandler = async (req, res) => {
    const U = await Usuario.find();
    console.log(U)
      return res.json(U);
  };
  
  export const getUsuario: RequestHandler = async (req, res) => {
    const videoFound = await Usuario.findById(req.params.id);
  
    if (!videoFound) return res.status(204).json();
  
    return res.json(videoFound);
  };

  export const createPlan: RequestHandler = async (req, res) => {
    const newPlan = new plans(req.body);  
    console.log(newPlan)
    const savedPlan = await newPlan.save();
    res.json(savedPlan);
  };

  export const getPlans: RequestHandler = async (req, res) => {
    const P = await plans.find();
    console.log(P)
      return res.json(P);
  };
  
  export const getPlan: RequestHandler = async (req, res) => {
    const planFound = await plans.findById(req.params.id);
  
    if (!planFound) return res.status(204).json();
  
    return res.json(planFound);
  };
  