export default class BlogService {

  async getData(url) {
    const res = await fetch(url);
    return await res.json();
  }

  async getAllPosts() {
    const res = await this.getData('https://jsonplaceholder.typicode.com/posts');
    return res;
  }

  async getComments(id) {
    const res = await this.getData(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return res;
  }

  async getUser(id) {
    const res = await this.getData(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res;
  }

}

