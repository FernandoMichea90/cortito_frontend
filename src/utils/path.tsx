// function that join root wiht sublink

export function path(link:string,sublink:string|null=null){
    let path=link;
    if(sublink){
        path+=sublink
    }
    return path;
}
