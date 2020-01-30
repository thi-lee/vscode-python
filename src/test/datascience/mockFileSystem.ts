// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';

import { FileSystem } from '../../client/common/platform/fileSystem';
import { IPlatformService } from '../../client/common/platform/types';

export class MockFileSystem extends FileSystem {
    private contentOverloads = new Map<string, string>();

    constructor(platformService: IPlatformService) {
        super(platformService);
    }
    public async readFile(filePath: string): Promise<string> {
        const contents = this.contentOverloads.get(filePath);
        if (contents) {
            return contents;
        }
        return super.readFile(filePath);
    }
    public addFileContents(filePath: string, contents: string): void {
        this.contentOverloads.set(filePath, contents);
    }
}
