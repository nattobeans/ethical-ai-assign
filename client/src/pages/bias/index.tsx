import React from "react";
import SectionWrapper from "src/hoc/SectionWrapper";
import BiasHero2 from "./BiasHero2";
import PrepromptChat from "./PrepromptChat";
import MainContainer from "./MainContainer";
import { MessageSquare } from "lucide-react";
import Heading from "src/components/Heading";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import Loader from "src/components/Loader";
import ConclusionSection from "./ConclusionSection";

const Bias = () => {
  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <>
      <BiasHero2 />
      <div className="mt-5">
        <PrepromptChat />
      </div>
      <MainContainer />
      <ConclusionSection />
    </>
  );
};

export default Bias;
