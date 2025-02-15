import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import LinkCard from "../components/auth/LinkCard";
import { getVerifyEmail } from "../lib/api";

const VerifyEmail = () => {
  const { code } = useParams() as { code: string };

  const { isPending, isError, isSuccess } = useQuery({
    queryKey: ["email-verification", code],
    queryFn: () => getVerifyEmail(code),
  });

  return (
    <div className="px-4 py-16 flex flex-col justify-center items-center">
      {isPending && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-main-300">Email verification in process...</p>
          <LoadingSpinner />
        </div>
      )}
      {isSuccess && (
        <LinkCard
          message="Email is successfully verified!"
          linkPath="/login"
          linkText="login"
          replace={true}
        />
      )}
      {isError && (
        <div className="flex flex-col items-center">
          <h3 className="text-md text-error font-bold">Email not verified!</h3>
          <LinkCard
            message="The link is either invalid or expired."
            linkPath="/password/forgot"
            linkText="Get new link!"
            replace={true}
          />
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
