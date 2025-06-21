export type UnsplahImage = {
    id:string;
    urls: {
        small: string;
        regular: string;
        full: string;
    };
    alt_description: string;
    likes: number;
    user: {
        name: string;
    };
};