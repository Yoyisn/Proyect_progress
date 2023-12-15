import { Router } from "express";
import { sign } from "jsonwebtoken";
import multer from 'multer';

const storage = multer.memoryStorage();

const upload = multer({storage:storage})

const router = Router ();


router.post('imgData', upload.single('filePro'), (req, res) =>{

    const {filePro} = req.body;
    
    const imageUrl  = filePro;

    res.json({ url: imageUrl });

});

