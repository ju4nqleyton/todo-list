import { Tasks } from './Tasks';

export const TaskList = ({ tasks, setTask, deleteTask }) => {
  return (
    <div className='md:w-full lg:w-1/2 mx-5 mb-10 md:h-screen overflow-scroll'>
      {tasks && tasks.length ? (
        <>
          <h2 className='font-black text-3xl text-center mb-10 text-white'>
            Tasks
          </h2>

          {tasks.map((task) => {
            return (
              <Tasks
                key={task.id}
                task={task}
                setTask={setTask}
                deleteTask={deleteTask}
              />
            );
          })}
        </>
      ) : (
        <h2 className='font-black text-3xl text-center mb-10 text-white'></h2>
      )}
    </div>
  );
};
