import axios from "axios";

const BaseURL = "https://jsonplaceholder.typicode.com";


const UkilSiteBaseUrl = "https://course.manirul.xyz";

export const ImagebaseURL = "https://course.manirul.xyz/assets/images/";
  

//show menu on header
export async function usersData() {
  let res = await axios.get(BaseURL + "/users");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}


// all sliders
export async function allSliders() {
  let res = await axios.get(UkilSiteBaseUrl + "/ListSlider");
  if (res.status === 200) {   
    console.log(res.data);
    return res.data;
    
  } else {
    return [];
  }
}

// faqs 

export async function allFQAs() {
  let res = await axios.get(UkilSiteBaseUrl + "/course-categories/CourseFaqs");
  if (res.status === 200) {   
    console.log(res.data);
    return res.data;
    
  } else {
    return [];
  }
}


