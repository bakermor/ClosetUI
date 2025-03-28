import { api } from "./axiosConfigs";

export function uploadClothes(file: File) {
  const formData = new FormData();
  formData.append("image", file);

  return api.post("/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
