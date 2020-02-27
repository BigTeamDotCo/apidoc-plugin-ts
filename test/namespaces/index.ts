export namespace FirstNamespace {
  export namespace SecondNamespace {
    export interface Result {
      id: string;
    }
  }
}

/**
 * @api {get} /api/:id
 * @apiInterface {FirstNamespace.SecondNamespace.Result}
 * @apiGroup Interface inside namespace
 */
