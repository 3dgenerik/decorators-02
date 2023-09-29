import 'reflect-metadata'

const routeBinder = (method: AppMethod)=>{
    return (path: string) =>{
        return (target: any, key: string, desc: PropertyDescriptor)=>{
            Reflect.defineMetadata(AppFeatures.PATH, path, target, key)
            Reflect.defineMetadata(AppFeatures.METHOD, method, target, key)
        }
    }   
}

export const get = routeBinder(AppMethod.GET)
export const post = routeBinder(AppMethod.POST)
export const del = routeBinder(AppMethod.DEL)
export const patch = routeBinder(AppMethod.PATCH)
export const put = routeBinder(AppMethod.PUT)
