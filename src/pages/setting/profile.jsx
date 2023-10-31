import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { getMember } from "@/api/members";

export default function Profile() {
  const [inputCount, setInputCount] = useState(2);
  const [inputValues, setInputValues] = useState(Array(2).fill(""));
  const [inputErrors, setInputErrors] = useState(Array(2).fill(false));

  const handleAddInput = () => {
    setInputCount(inputCount + 1);
    setInputValues([...inputValues, ""]);
    setInputErrors([...inputErrors, false]);
  };

  const handleDeleteInput = (index) => {
    const newInputValues = [...inputValues];
    newInputValues.splice(index, 1);
    setInputValues(newInputValues);
    setInputCount(inputCount - 1);
    const newInputErrors = [...inputErrors];
    newInputErrors.pop();
    setInputErrors(newInputErrors);
  };
=======
import { getMember, updateMember } from "@/api/members";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  const navigate = useNavigate();
>>>>>>> 62e87a3 (회원정보 수정 api)

  const {
    isLoading,
    data: memberData,
    error,
  } = useQuery(["members"], getMember, {
    refetchOnWindowFocus: false,
  });

<<<<<<< HEAD
  const handleUpdateProfile = () => {
    const newInputErrors = inputValues.map((value) => value.trim() === "");
    setInputErrors(newInputErrors);

    if (newInputErrors.some((error) => error)) {
      return;
    }
=======
  useEffect(() => {
    if (memberData) {
      setInputEmail(memberData.email);
      setInputName(memberData.businessName);
      setInputAddress(memberData.businessAddress);
    }
  }, [memberData]);

  const handleUpdateProfile = async () => {
    if (inputEmail !== "" && inputName !== "" && inputAddress !== "") {
      await updateMember({
        email: inputEmail,
        businessName: inputName,
        businessAddress: inputAddress,
      }).then(() => {
        navigate("/");
      });
    }
>>>>>>> 62e87a3 (회원정보 수정 api)
  };

  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="w-full max-w-screen-md ">
          <h2 className="text-lg font-bold">내 정보</h2>
        </div>
        {isLoading && <p>로딩중</p>}
        {error && <p>에러</p>}
        {
          <div className="flex justify-center flex-col mt-8 gap-5">
            <div className="flex justify-center flex-col gap-2">
              <h3>이메일</h3>
<<<<<<< HEAD
              <Input value={memberData.email} onChange={(e) => {}} />
=======
              <Input
                value={inputEmail}
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
              />
>>>>>>> 62e87a3 (회원정보 수정 api)
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>상호명</h3>
              <Input
                value={inputName}
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center flex-col gap-2">
              <h3>사업장 주소</h3>
              <Input
                value={inputAddress}
                onChange={(e) => {
                  setInputAddress(e.target.value);
                }}
              />
              {inputAddress === "" && (
                <p className="text-red-500">칸이 비어 있습니다.</p>
              )}

<<<<<<< HEAD
              {Array.from({ length: inputCount }).map((_, index) => (
                <div key={index}>
                  <Input
                    value={memberData.businessAddress}
                    onChange={(e) => {
                      const newInputValues = [...inputValues];
                      newInputValues[index] = e.target.value;
                      setInputValues(newInputValues);
                    }}
                  />
                  {inputErrors[index] && (
                    <p className="text-red-500">칸이 비어 있습니다.</p>
                  )}
                </div>
              ))}

              <div className="flex gap-2">
                <Button className="w-20" onClick={handleAddInput}>
                  Add
                </Button>
                <Button
                  className="w-20"
                  onClick={() => handleDeleteInput(inputCount - 1)}
                >
                  Del
                </Button>
              </div>

              <Button className="w-32" onClick={handleUpdateProfile}>
                <Link to="/">Update Profile</Link>
              </Button>
            </div>
          </div>
        )}
=======
              <Button className="w-32" onClick={handleUpdateProfile}>
                Update Profile
              </Button>
            </div>
          </div>
        }
>>>>>>> 62e87a3 (회원정보 수정 api)
      </div>
    </>
  );
}
