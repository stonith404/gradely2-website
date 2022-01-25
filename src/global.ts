/// <reference types="@sveltejs/kit" />

import { Appwrite } from "appwrite";

export const sdk = new Appwrite();


    sdk.setEndpoint("https://gradelyapp.com/v1").setProject(
        "60f40cb212896"
    );


