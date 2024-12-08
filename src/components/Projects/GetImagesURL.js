import supabase from "../../../supabase";

export const getImagesURL = (folderName) => {
  let array = [];

  for (let index = 1; index <= 5; index++) {
    const {
      data: { publicUrl },
    } = supabase.storage
      .from("Project_images")
      .getPublicUrl(`${folderName}/${index}.jpg`);

    array.push(publicUrl);
  }

  return array;
};

export const getImagePath = (folderName) => {
  return supabase.storage
    .from("Project_images")
    .getPublicUrl(`${folderName}/1.jpg`).data.publicUrl;
};
