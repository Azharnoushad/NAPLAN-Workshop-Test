import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { naplanData } from "@/data";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

type AnswersMap = Record<number, number>;

const Quiz = () => {
  const { skillId } = useParams();

  const navigate = useNavigate();

  const [skill, setSkill] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [showResult, setShowResult] = useState(false);
  const handleAnswerSelect = (selectedIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: selectedIndex,
    }));
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < skill.questions.length - 1) {
      setCurrentQuestionIndex((prevState) => prevState + 1);
    }
  };

  const calculateCorrectAnswers = () => {
    let correct = 0;

    skill.questions.forEach((q: Question) => {
      if (answers[q.id] === q.correctIndex) {
        correct++;
      }
    });

    return correct;
  };

  useEffect(() => {
    const foundSkill = naplanData.skills.find((item) => item.id === skillId);

    if (skillId) {
      setSkill(foundSkill);
    } else navigate("/");
  }, [skillId, navigate]);

  if (!skill) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        Loading Quiz...
      </div>
    );
  }
  const currentQuestion = skill.questions[currentQuestionIndex];
  if (showResult) {
    const correct = calculateCorrectAnswers();
    const total = skill.questions.length;

    return (
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 text-center space-y-4">
          <h2 className="text-3xl font-bold text-primary-600">🎉 Great Job!</h2>

          <p className="text-xl text-gray-800">
            You answered <span className="font-bold">{correct}</span> out of{" "}
            <span className="font-bold">{total}</span> questions correctly!
          </p>

          <p className="text-gray-600">
            Keep practicing — you’re learning every day 🌟
          </p>

          <Button className="mt-6 cursor-pointer" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{skill.name}</h1>
        <p className="text-gray-600">{skill.description}</p>
      </div>

      <div className="text-sm text-gray-600">
        Progress: {Object.keys(answers).length} / {skill.questions.length}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">{currentQuestion.text}</h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option: any, index: any) => {
            const isSelected = answers[currentQuestion.id] === index;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 rounded border transition ${
                  isSelected
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-300 hover:border-primary-400"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </Card>

      <div className="flex justify-between">
        <Button
          variant={"outline"}
          disabled={currentQuestionIndex === 0}
          onClick={handlePrevious}
        >
          Previous
        </Button>

        <Button
          variant={"outline"}
          disabled={currentQuestionIndex === skill.questions.length - 1}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>

      {currentQuestionIndex === skill.questions.length - 1 && (
        <Button
          className="w-full"
          variant={"outline"}
          onClick={() => setShowResult(true)}
        >
          Finish Quiz
        </Button>
      )}
    </div>
  );
};

export default Quiz;
