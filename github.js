class Github {
  constructor() {
    this.client_id = 'b5d518aade0b02c3e4c2';
    this.client_secret = '4ccaf3ec2133eb2330ad512f3f4cd71159e70d8c';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
