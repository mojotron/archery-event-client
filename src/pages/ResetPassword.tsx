import { useSearchParams } from "react-router";
import LinkCard from "../components/auth/LinkCard";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const expire = Number(searchParams.get("exp"));
  const now = Date.now();

  const isLinkValid = code && expire && expire > now;

  if (isLinkValid) {
    return <div>Reset Password form</div>;
  }

  return (
    <div className="p-4 flex flex-col items-center">
      {isLinkValid ? (
        <ResetPasswordForm code={code} />
      ) : (
        <LinkCard
          message="Invalid or expired reset password link!"
          linkPath="/password/forgot"
          linkText="Request a new password reset link."
          replace={true}
        />
      )}
    </div>
  );
};

export default ResetPassword;
