import type {
  ProjectApiModel,
  ProjectListViewModel,
  ProjectModelBase,
} from "build-it-better-shared";
import { apiClient } from "../services/axios";

class ProjectApi {
  _base_url: string;
  constructor(base_url?: string) {
    this._base_url = base_url ?? "/projects";
  }

  /** Get a project. */
  public async Get(projectId: string): Promise<ProjectModelBase | null> {
    return {
      id: "1",
      description: "Test 1",
      name: "Test 1",
    };

    const apiModel = (
      await apiClient.get<ProjectApiModel>(`${this._base_url}\\${projectId}`)
    ).data;

    return this.TransformProjectApiModelToProjectModel(apiModel);
  }

  public async List(): Promise<ProjectListViewModel[]> {
    // return [
    //   {
    //     id: "1",
    //     description: "Test 1",
    //     name: "Test 1",
    //   },
    //   {
    //     id: "2",
    //     description: "Test 2",
    //     name: "Test 2",
    //   },
    //   {
    //     id: "3",
    //     description: "Test 3",
    //     name: "Test 3",
    //   },
    //   {
    //     id: "4",
    //     description: "Test 4",
    //     name: "Test 4",
    //   },
    //   {
    //     id: "5",
    //     description: "Test 5",
    //     name: "Test 5",
    //   },
    //   {
    //     id: "6",
    //     description: "Test 6",
    //     name: "Test 6",
    //   },
    // ];

    const apiModels = (await apiClient.get<ProjectApiModel[]>("list-projects"))
      .data;

    return apiModels.map((apiModel) =>
      this.TransformProjectApiModelToListModel(apiModel)
    );
  }

  private TransformProjectApiModelToProjectModel(
    apiModel: ProjectApiModel
  ): ProjectModelBase {
    return apiModel;
  }

  private TransformProjectApiModelToListModel(
    apiModel: ProjectApiModel
  ): ProjectListViewModel {
    return apiModel;
  }
}

export const projectApi = new ProjectApi();
