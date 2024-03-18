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

const AddBlogAdmin = () => {



  return (
    <>
      <form className="form-add-blog">
        <div className="form-add-blog__img-preview">
          <label>
            <input
              type="file"
              onChange={(e) => pre(e.target.files[0])}
              name="img-cover"
              accept="image/*,.png,.svg,.jpg,.jpeg"
              hidden
            />
          </label>
        </div>

        <div contentEditable onInput={(e) => console.log(e.target.textContent)}>
          <a href="#">
            <strong>Link</strong>{" "}
          </a>
        </div>

        <button>Додати</button>
      </form>
    </>
  );
};

export default AddBlogAdmin;
