import { Box, Image } from "@chakra-ui/react";

export function QuizPhotos() {
  return (
    <div className="img_div">
      <Box boxSize="200px">
        <Image
          src="https://media.istockphoto.com/vectors/biology-poster-vector-id623900910"
          alt="biology"
        />
      </Box>
      <Box boxSize="200px" mt={2}>
        <Image
          src="https://i.pinimg.com/originals/22/72/2b/22722b33f4d7e9d810c6bce2fe678128.jpg"
          alt="chemistry"
        />
      </Box>
      <Box boxSize="200px">
        <Image
          src="https://lh3.googleusercontent.com/1NkEVFSEzXwTdiHjwg0yFJW7t_bOh69Z607syB7zR3Oc-bk7Kql6-7UZOF29YHa4nKzZ"
          alt="biology"
        />
      </Box>
      <Box boxSize="200px">
        <Image
          src="https://i.pinimg.com/736x/ae/0b/e8/ae0be8c0e0c937b33478d9d20e582238.jpg"
          alt="chemistry"
        />
      </Box>
    </div>
  );
}
