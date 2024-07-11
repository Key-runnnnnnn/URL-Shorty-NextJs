import UrlRepository from '@/repository/UrlRepository';
import shortId from 'shortid'
// All the business logic is done here in the service layer like validation, error handling, etc.

export class UrlShortenerService {
  private urlRepository;
  constructor() {
      this.urlRepository = new UrlRepository();
  }

  async shortenUrl(originalUrl?: string) : Promise<string> {
      if(!originalUrl) {
          return "";
      }
      let url = await this.urlRepository.getUrlByOriginalUrl(originalUrl);
      if(url) {
          return url.shortUrl;
      }
      let shortUrl = shortId();
      url = await this.urlRepository.getUrlByShortUrl(shortUrl);
      while(url) {
          shortUrl = shortId();
          url = await this.urlRepository.getUrlByShortUrl(shortUrl);
      }

      await this.urlRepository.createUrl(originalUrl, `urls/${shortUrl}`);
      return shortUrl;
  }

  async getAllUrls() {
      return await this.urlRepository.getAllUrls();
  }

  async getUrlByShortUrl(shortUrl: string) {
      return await this.urlRepository.getUrlByShortUrl(shortUrl);
  }

  // TODO 
  
    // async getUrlByOriginalUrl(originalUrl: string) {
    //     return await this.urlRepository.getUrlByOriginalUrl(originalUrl);
    // }

    // async deleteUrl(id: string) {
    //     return await this.urlRepository.deleteUrl(id);
    // }

    // async updateUrl(id: string, shortUrl: string) {
    //     return await this.urlRepository.updateUrl(id, shortUrl);
    // }

    // async getUrlById(id: string) {
    //     return await this.urlRepository.getUrlById(id);
    // }

    // async createUrl(originalUrl: string, shortUrl: string) {
    //     return await this.urlRepository.createUrl(originalUrl, shortUrl);
    // }
}