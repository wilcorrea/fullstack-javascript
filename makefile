# install the all party
install:
	./run.back.sh yarn install
	# ./run.front.sh yarn install

# start the development mode
dev:
	docker-compose up

# start the development mode
logs:
	docker-compose logs

# access the back container
sh-back:
	docker exec -it back sh

# access the front container
sh-front:
	docker exec -it front sh

# perform tests
test-back:
	./run.back.sh yarn test:watch --testPathIgnorePatterns \(.*Integration.*\)

# perform tests
test-back-full:
	./run.back.sh yarn test:watch
	# ./run.front.sh yarn install

# perform tests
test-front:
	./run.front.sh yarn test:unit

# perform tests
test-front-full:
	./run.front.sh yarn test:unit-watch

# perform tests
run-build:
	./run.back.sh yarn prod
	docker run\
     --rm\
     -it\
     -v ${PWD}:/var/www/app\
     -w /var/www/app\
     -p 443:443\
     node:10-alpine node dist/back/server.js