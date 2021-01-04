export class Video {
    videoId: string;
    videoUrl: string;
    channelId: string;
    channelUrl: string;
    channelTitle: string;
    title: string;
    publishedAt: Date;
    description: string;
    thumbnail: string;
    constructor(videoId: string,videoUrl: string, channelId: string, channelUrl: string, channelTitle: string,
        title: string, publishedAt: Date, description: string, thumbnail: string) {
            this.channelId = channelId;
            this.videoId = videoId;
            this.videoUrl= videoUrl;
            this.channelId= channelId;
            this.channelUrl= channelUrl;
            this.channelTitle= channelTitle;
            this.title= title;
            this.publishedAt= publishedAt;
            this.description= description;
            this.thumbnail= thumbnail;
    }
}
