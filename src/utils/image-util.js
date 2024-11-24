export default function getImageURL(name, folder){
    return new URL(`../assets/${folder.toLowerCase()}/${name}`, import.meta.url).href;
}