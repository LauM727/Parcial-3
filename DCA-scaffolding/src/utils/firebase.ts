import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import{Recetas}from"../types/ingredientes"
import { getFirestore ,collection, addDoc, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveRecetaInDB=async(receta:Recetas)=>{

try {
   await addDoc(collection(db, "recetas"), receta);
} catch (e) {
  console.error("Error adding document: ", e);

}

};
const getRecetasFromDB=async(): Promise<Recetas[]> =>{
  const answer: Recetas[]=[];
  const querySnapshot = await getDocs(collection(db, "recetas"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    answer.push({
      ...doc.data(),
    } as Recetas);
});
  return answer;
}
export default{saveRecetaInDB,getRecetasFromDB};