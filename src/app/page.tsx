import AddTaskModal from "@/components/Modals/AddTaskModal/AddTaskModal";
import Header from "@/components/Header/Header";
import Tasks from "@/components/Tasks/Tasks";

export default function Home() {
  return (
    <>
      <Header />
      <Tasks />
      <AddTaskModal />
    </>
  );
}
