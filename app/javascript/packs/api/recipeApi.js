import axios from 'axios';

const API_URL = '/api/recipes';

export function getRecipes() {
  return axios.get(`${API_URL}`);
}

export function updateRecipe(recipe) {
  // return axios.get(`${API_URL}${purchaseOrderId}/manage_notes/notes`);

  return axios({
    method: 'post',
    url: `${API_URL}/${recipe.id}`,
    data: recipe,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
  });
}
