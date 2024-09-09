import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { from, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  firestore = inject(Firestore);
  experienceCollection = collection(this.firestore, 'experiences');
  skillsCollection = collection(this.firestore, 'skills');

  testimonialsCollection = collection(this.firestore, 'testimonials');
  constructor() {}

  getExperiences() {
    return from(getDocs(this.experienceCollection)).pipe(
      map((snapshot) => snapshot.docs.map((doc) => doc.data()))
    );
  }
  getSkills() {
    return from(getDocs(this.skillsCollection)).pipe(
      map((snapshot) => snapshot.docs.map((doc) => doc.data()))
    );
  }
  getTestimonials() {
    return from(getDocs(this.testimonialsCollection)).pipe(
      map((snapshot) => snapshot.docs.map((doc) => doc.data()))
    );
  }
  addExperiences() {
    // this.techStack.forEach((element,index) => {
    //   const docref = doc(this.firestore, 'skills',uuidv4());
    //   return from(setDoc(docref, element));
    // });
  }
  generateId(startLetter: string, endLetter: string, startNumber: number, endNumber: number): string[] {
    const ids: string[] = [];
  
    for (let letter = startLetter.charCodeAt(0); letter <= endLetter.charCodeAt(0); letter++) {
      for (let number = startNumber; number <= endNumber; number++) {
        ids.push(String.fromCharCode(letter) + number);
      }
    }
    return ids;
  }
}
