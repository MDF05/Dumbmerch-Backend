import dashboardRepository from "../repository/dashboard-repository";

class DashboardService {
  async getStats(period: "day" | "week" | "month" | "year") {
    return dashboardRepository.getStats(period);
  }
}

export default new DashboardService();
