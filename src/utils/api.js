class Api {
  constructor({ url, headers }) {
    this._url = url;
    this.addLike = this.addLike.bind(this);
    this._headers = headers;
    this.postCard = this.postCard.bind(this);
    this.deleteLike = this.deleteLike.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
    this.deleteCardApi = this.deleteCardApi.bind(this);
    this.changeProfileInfo = this.changeProfileInfo.bind(this);
  }

  _check(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _getCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._check);
  }

  _getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._check);
  }

  postCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._check);
  }

  deleteCardApi(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._check);
  }

  changeProfileInfo(data) {
    console.log(data);
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.username,
        about: data.userjob,
      }),
    }).then(this._check);
  }

  changeAvatar(data) {
    console.log(data);
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._check);
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._check);
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._check);
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this.addLike(cardId);
    } else {
      return this.deleteLike(cardId);
    }
  }

  getDataAll() {
    return Promise.all([this._getCards(), this._getUserInfo()]);
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41",
  headers: {
    authorization: "9f932bbc-acd7-4dae-8249-c98552659f56",
    "content-type": "application/json",
  },
});
export default api;
