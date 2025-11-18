import { reportMapper } from '../../data/api-mapper';
import dummyReports from '../../data/dummy-reports';

export default class ReportDetailPresenter {
  #reportId;
  #view;
  #apiModel;

  constructor(reportId, { view, apiModel }) {
    this.#reportId = reportId;
    this.#view = view;
    this.#apiModel = apiModel;
  }

  async showReportDetailMap() {
    this.#view.showMapLoading();
    try {
      await this.#view.initialMap();
    } catch (error) {
      console.error('showReportDetailMap: error:', error);
    } finally {
      this.#view.hideMapLoading();
    }
  }

  async showReportDetail() {
    this.#view.showReportDetailLoading();
    try {
      const response = await this.#apiModel.getReportById(this.#reportId);

      if (response.ok && response.data) {
        const report = await reportMapper(response.data);

        await this.#view.populateReportDetailAndInitialMap(response.message, report);
        return false; 
      }

      const localDummy = dummyReports.find((r) => String(r.id) === String(this.#reportId));

      if (localDummy) {
        await this.#view.populateReportDetailAndInitialMap('OK (dummy)', localDummy);
        return true;
      }

      this.#view.populateReportDetailError(response.message);
      return false;
    } catch (error) {

      const localDummy = dummyReports.find((r) => String(r.id) === String(this.#reportId));

      if (localDummy) {
        await this.#view.populateReportDetailAndInitialMap('OK (dummy)', localDummy);
        return true;
      }

      this.#view.populateReportDetailError(error.message);
      return false;
    } finally {
      this.#view.hideReportDetailLoading();
    }
  }

  async getCommentsList() {
    this.#view.showCommentsLoading();
    try {
      const response = await this.#apiModel.getAllCommentsByReportId(this.#reportId);
      this.#view.populateReportDetailComments(response.message, response.data);
    } catch (error) {
      console.error('getCommentsList: error:', error);
      this.#view.populateCommentsListError(error.message);
    } finally {
      this.#view.hideCommentsLoading();
    }
  }

  async postNewComment({ body }) {
    this.#view.showSubmitLoadingButton();
    try {
      const response = await this.#apiModel.storeNewCommentByReportId(this.#reportId, { body });

      if (!response.ok) {
        console.error('postNewComment: response:', response);
        this.#view.postNewCommentFailed(response.message);
        return;
      }

      this.#view.postNewCommentSuccessfully(response.message, response.data);
    } catch (error) {
      console.error('postNewComment: error:', error);
      this.#view.postNewCommentFailed(error.message);
    } finally {
      this.#view.hideSubmitLoadingButton();
    }
  }
}
