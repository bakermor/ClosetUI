import { api } from "./axiosConfigs";

export interface ClothingItem {
  id: number;
  url: string;
}

export function uploadClothes(file: File) {
  const formData = new FormData();
  formData.append("image", file);

  return api.post("/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function getAll() {
  return api.get("/files/get");
}
