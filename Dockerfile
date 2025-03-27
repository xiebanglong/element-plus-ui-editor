FROM image-docker.zuoyebang.cc/base/node-builder:16.15.1-slim as builder

WORKDIR /output
WORKDIR /home/homework/
COPY . /home/homework/
RUN npm install -g pnpm --registry=http://ued.zuoyebang.cc/npm/
RUN pnpm install --registry=http://ued.zuoyebang.cc/npm/
ARG CI_FE_DEBUG
ARG REPO_GIT_REMOTE_ADDRESS
RUN if [ "$CI_FE_DEBUG" = "true" ] ; then pnpm run build:dev; else pnpm run build:prod; fi

# 运行
FROM image-docker.zuoyebang.cc/privbase/fe-nginx:1.2.5-cos

ARG APP_NAME
ENV APP_NAME $APP_NAME
ARG REPO_NAME
ENV REPO_NAME $REPO_NAME
# 仅用于通用的前端，部分前端视情况来组织目录结构
COPY --from=builder /home/homework/dist/ /home/homework/www/static/$APP_NAME/
COPY ./location.d/ /etc/nginx/location.d/
