import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {
    

    //http://localhost:3333/answers/2?u=2bfc8dde-4f89-4ae8-939d-61b7a7f559c8
    /**
     * 
     Route Params => Parâmetros e compõe a rota (/valor). Ex: (/2), (/answers)
     routes.get("/answers/:value")

     Query Params => Busca, Paginação, não obrigatórios
     ?
     chave=valor. ex: (?user=00001)
     ?u=2bfc8dde-4f89-4ae8-939d-61b7a7f559c8
     */

    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u) //u pode ser undefined, pois os query parameters podem não ser passados, o id espera uma string, portanto foi realizada a conversão, mesmo que venha undefined ele converte em string
        });

        if(!surveyUser) {
            throw new AppError("Survey User does not exists!")
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export { AnswerController }