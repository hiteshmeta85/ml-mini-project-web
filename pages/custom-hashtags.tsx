import {Formik, Field, Form, FieldArray} from "formik";
import Link from "next/link";
import {AiOutlineCloseCircle} from "react-icons/ai";
import Router from "next/router";

const CustomHashtags = () => (
  <div className={'bg-[#1F2028] text-white'}>
    <div className={'max-w-screen-2xl relative mx-auto'}>
      <div className={'flex gap-4 text-right p-4 absolute top-0 right-0 z-10'}>
        <Link href={'/'} passHref>
          <a>&#8592; Home</a>
        </Link>
      </div>
      <div className={'flex flex-col justify-center items-center min-h-screen'}>
        <Formik
          initialValues={{
            hashtags: ['help', 'emergency', 'rescue'],
          }}
          onSubmit={values => {
            if(values.hashtags.length > 0){
              Router.push({
                pathname: '/web-scraping',
                query: {hashtags: values.hashtags.filter((items) => items.length !== 0)}
              })
            }
          }}
        >
          {({
              values,
              handleReset,
            }) => (
            <Form className={'md:min-w-[350px]'}>
              <FieldArray
                name="hashtags"
                render={arrayHelpers => (
                  <div>
                    <div className={'mb-4'}>
                      <button
                        onClick={(event) => {
                          event.preventDefault()
                          arrayHelpers.form.values.hashtags.length > 0 ? arrayHelpers.form.values.hashtags[0].trim().length > 0 && arrayHelpers.insert(0, '') : arrayHelpers.insert(0, '')
                        }}
                        className={'px-4 py-2 text-center w-full border border-2 rounded-lg transition-all duration-200 hover:scale-105'}
                      >
                        Add Hashtag
                      </button>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                      {values.hashtags.map((friend, index) => (
                        <div key={index}
                             className={'flex items-center bg-[#2D3039] px-4 py-2 border border-2 border-transparent transition-all duration-300 hover:border-white cursor-pointer rounded-lg'}>
                          <Field
                            name={`hashtags.${index}`}
                            autoComplete="off"
                            placeholder={"Type a hashtag..."}
                            className={'bg-transparent outline-0 w-full'}
                          />
                          <button
                            onClick={(event) => {
                              event.preventDefault()
                              arrayHelpers.remove(index)
                            }}
                            className={'ml-4'}
                          >
                            <AiOutlineCloseCircle size={'1.5rem'}/>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              />
              <div className={'mt-4 flex gap-4'}>
                <button
                  onClick={event => {
                    event.preventDefault();
                    handleReset();
                  }}
                  className={'px-4 py-2 text-center w-full border border-2 rounded-lg transition-all duration-200 hover:scale-105'}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className={'px-4 py-2 text-center w-full border border-2 rounded-lg transition-all duration-200 hover:scale-105'}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
);

export default CustomHashtags