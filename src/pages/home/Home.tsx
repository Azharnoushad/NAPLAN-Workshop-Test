import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { naplanData } from "@/data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartQuiz = (_skillId: string) => {
    navigate(`/quiz/${_skillId}`);
  };
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          NAPLAN Workshop
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Practice and improve your skills with interactive quizzes covering all
          NAPLAN areas
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Choose a skill area
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {naplanData?.skills.map((skill) => (
            <Card
              key={skill.id}
              className="p-6 hover:shadow-md hover:-translate-y-2  border-none shadow-md transition-all"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span>{skill.questions.length} questions</span>

                <Button
                  variant={"outline"}
                  className="border-gray-400 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleStartQuiz(skill.id)}
                >
                  Start Quiz
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
