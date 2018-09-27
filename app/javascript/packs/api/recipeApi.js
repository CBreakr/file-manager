import axios from 'axios';

const API_URL = '/api/recipes';

export function getRecipes() {
  return axios.get(`${API_URL}`);
}

export function updateRecipe(formData, recipeId) {
  return axios({
    method: 'post',
    url: `${API_URL}/${recipeId}`,
    data: formData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
  });
}
