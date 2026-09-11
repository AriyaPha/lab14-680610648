import UserRegisterCard from "../components/UserRegisterCard";
import { loadTasks } from "../libs/Storage";

export default function DashboardPage() {
   const registrants = loadTasks();

  return (
    <>
      <div className="container mt-4">
        <h2>Dashboard</h2>
        <p>ผู้ลงทะเบียนแล้ว ({registrants.length} คน)</p>

        {registrants.length === 0 ? (
          <div className="alert alert-warning text-center">ยังไม่มีผู้ลงทะเบียน</div>): 
          (registrants.map((registrant) => (
          <UserRegisterCard key={registrant.id} registrant={registrant} />
        ))
       )}
      </div>
    </>
  );
}
