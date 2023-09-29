import 'reflect-metadata';
import { AppRoute } from '../../AppRoute';


export const controller = (pathPrefix: string) => {
    return (target: Function) => {
    const router = AppRoute.getInstance();
    const targetPrototype = Object.getOwnPropertyNames(target.prototype);
    for (const key of targetPrototype) {
      const path = Reflect.getMetadata(AppFeatures.PATH, target.prototype, key);
      const method = Reflect.getMetadata(
        AppFeatures.METHOD,
        target.prototype,
        key
      ) as AppMethod;
      if (path && method) {
        router[method](`${pathPrefix}${path}`, target.prototype[key]);
      }
    }
  };
};
