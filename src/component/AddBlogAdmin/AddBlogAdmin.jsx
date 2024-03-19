import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddBlogAdmin.scss";
import {
  getFirestore,
  doc,
  arrayUnion,
  collection,
  setDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  limit,
} from "firebase/firestore";
import { app } from "../../bd/firebase";
import EditorText from "../EditorText/EditorText";

const AddBlogAdmin = () => {



  return (
    <>
      <div className="form-add-blog">
        

        <EditorText/>
      </div>
    </>
  );
};

export default AddBlogAdmin;
