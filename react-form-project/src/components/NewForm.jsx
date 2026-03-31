import { useForm } from "react-hook-form";

//  Reusable Input Component
const InputField = ({ label, name, register, errors, rules, type = "text" }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        className={errors[name] ? "input-error" : ""}
        {...register(name, rules)}
      />
      {errors[name] && (
        <p className="error-msg">{errors[name].message}</p>
      )}
    </div>
  );
};

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
  });

  //  Submit Handler
  async function onSubmit(data) {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Submitting the form:", data);

      // Reset form after submission
      reset();
    } catch (error) {
      console.error("Submission failed:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <InputField
          label="First Name:"
          name="firstName"
          register={register}
          errors={errors}
          rules={{
            required: "First name is required",
            minLength: { value: 3, message: "Min length is 3" },
            maxLength: { value: 8, message: "Max length is 8" },
          }}
        />

        <br />

        {/* Middle Name */}
        <InputField
          label="Middle Name:"
          name="middleName"
          register={register}
          errors={errors}
        />

        <br />

        {/* Last Name */}
        <InputField
          label="Last Name:"
          name="lastName"
          register={register}
          errors={errors}
          rules={{
            required: "Last name is required",
            pattern: {
              value: /^[A-Za-z]{2,}$/,
              message: "Only letters allowed (min 2 characters)",
            },
          }}
        />

        <br />

        {/* Submit Button */}
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>
    </>
  );
}

export default App;